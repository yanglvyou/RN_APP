import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableNativeFeedback,
  Image,
  Dimensions,
} from 'react-native';
import CodePush from 'react-native-code-push';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';
import IconFont from '@/assets/iconfont';
import {set} from 'react-native-reanimated';
// 安卓下的热更新 CODE_PUSH_KEY
const CODE_PUSH_KEY = 'yuCW8NX_EzOpz69pJJNQqdrPDuhC_wpDVICBi';

const HotPushModal = () => {

  const inititalState={
    syncMessage: '',
    SyncStatusCode: 0,
    modalVisible: false, // 热更新弹窗
    isMandatory: false, // 是否强制更新
    isUpdate: false, // 是否有新版本
    updateInfo: {},
    binaryModifiedTime: '', // 更新时间
    isUploadPacke: false,
    showAskUpdateContent: false,
    CodePushRelease: '',
    progress: 0,
    packageSize: 0,
  }
  const [updateData, setUpdatedata] = React.useState(inititalState);

  React.useEffect(() => {
    check();
    getUpdateMetadata();
  }, []);

  // 检查更新
  const check = () => {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then((update) => {
      if (!update || update.failedInstall) {
        // 已是最新版
        return;
      }
      setUpdatedata({
        ...updateData,
        modalVisible: true,
        updateInfo: update,
        isMandatory: update.isMandatory,
      });
    });
  };

  const getUpdateMetadata = () => {
    CodePush.getUpdateMetadata().then((update) => {
      let updateTime = '';
      if (update && update.binaryModifiedTime) {
        updateTime = new Date(Number(update.binaryModifiedTime));
      }

      if (update) {
        setUpdatedata({
          ...updateData,
          binaryModifiedTime:
            updateTime.toLocaleDateString().replace(/\//g, '-') +
            ' ' +
            updateTime.toTimeString().substr(0, 8),
          CodePushRelease: update.label,
          packageSize: update.packageSize,
        });
      }
    });
  };

  /**
   * CodePush.InstallMode.IMMEDIATE 表示您要安装更新并立即重新启动应用程序。
   * codePush.InstallMode.ON_NEXT_RESTART 表示您要安装更新，但不强制重启应用程序。 当应用“自然”重启（由于操作系统或最终用户将其杀死）时，将无缝地获取更新。
   * codePush.InstallMode.ON_NEXT_RESUME 表示您要安装更新，但不希望重新启动应用程序，直到最终用户下次从后台恢复它为止。
   * codePush.InstallMode.ON_NEXT_SUSPEND 表示您要在后台运行更新，但要在后台运行了最少BackgroundDuration秒（默认为0）后才能安装
   */

  // 更新版本
  const update = () => {
    setUpdatedata({...updateData, isUpdate: true,isUploadPacke: true});
    CodePush.sync(
      {
        // deploymentKey: CODE_PUSH_KEY,
        // updateDialog: false,
        // installMode: CodePush.InstallMode.IMMEDIATE,
        // installMode: CodePush.InstallMode.ON_NEXT_RESTART,
      },
      (syncStatus) => {
        codePushStatusDidChange(syncStatus);
      },
      (Progress) => {
        setUpdatedata({...updateData, isUpdate: true,isUploadPacke: true});
        codePushDownloadDidProgress(Progress);
      },
    );
  };

  // 下载状态变化
  const codePushStatusDidChange = (syncStatus) => {
    console.log('codePushStatusDidChange',updateData.isUpdate,222222222);
    if (!updateData.isUpdate) {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          updateData.syncMessage = 'Checking for update';
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          updateData.syncMessage = 'Downloading package';
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          updateData.syncMessage = 'Awaiting user action';
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          updateData.syncMessage = 'Installing update';
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          updateData.syncMessage = '该应用程序已配置了部署的最新信息';
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          updateData.syncMessage = 'Update cancelled by user';
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          updateData.syncMessage =
            'Update installed and will be applied on restart.';
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          updateData.syncMessage = 'An unknown error occurred';
          setUpdatedata({...updateData, modalVisible: false});
          break;
      }
    }
  };

  // 计算下载进度
  const codePushDownloadDidProgress = (Progress) => {

    if (!updateData.isUpdate) {
      const progress =
        Math.floor((Progress.receivedBytes / Progress.totalBytes) * 100) / 100;
      setUpdatedata({...updateData, progress});
      if (progress >= 1) {
        setUpdatedata({
          ...updateData,
          showAskUpdateContent: true,
          isUploadPacke: false,
        });
        // setUpdatedata({...updateData,modalVisible: false})
      }
    }
  };

  const onAppRestartCancel = () => {
    setUpdatedata({...updateData, modalVisible: false});
  };

  const onAppRestart = () => {
    CodePush.restartApp();
  };

  // 取消
  const onCancel = () => {
    setUpdatedata({...updateData, modalVisible: false});
  };
  return (
    <Modal
      animationType={'none'}
      transparent={true}
      visible={updateData.modalVisible}>
      <View style={styles.content}>
        {!updateData.isUpdate && (
          <View style={styles.contentArea}>
            <LinearGradient
              colors={['#009387', '#009387']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearHeader}>
              <View style={styles.titleWrapper}>
                <IconFont
                  name="iconhuojian1"
                  size={40}
                  color="#fff"
                  style={styles.iconhuojian2}
                />
                <Text style={[styles.label]}>
                  发现新版本{updateData.CodePushRelease}
                </Text>
              </View>
              <Image
                style={styles.header_bg}
                resizeMode="contain"
                source={require('../../assets//updata.png')}
              />
            </LinearGradient>
            {updateData && updateData.packageSize.length > 0 && (
              <Text style={styles.packageSize}>
                更新包大小{updateData.packageSize}KB
              </Text>
            )}
            <View style={styles.updateDes}>
              {updateData && updateData.binaryModifiedTime.length > 0 && (
                <Text style={styles.binaryModifiedTime}>
                  版本更新时间:{updateData.binaryModifiedTime}
                </Text>
              )}
              <Text style={styles.title}>更新内容:</Text>
              <Text style={[styles.description]}>
                {updateData.updateInfo.description || '暂无版本介绍'}
              </Text>
            </View>
            {/* 按钮,判断是否强制更新 */}
            {updateData.isMandatory ? (
              <View style={styles.buttonArea}>
                <TouchableNativeFeedback onPress={update}>
                  <View style={[styles.button, {backgroundColor: '#009387'}]}>
                    <Text style={styles.buttonText}>立即更新</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            ) : (
              <View style={styles.buttonsArea}>
                <TouchableNativeFeedback onPress={onCancel}>
                  <View style={[styles.buttons, {backgroundColor: '#DB4C40'}]}>
                    <Text style={[styles.buttonText]}>残忍拒绝</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={update}>
                  <View style={[styles.buttons, {backgroundColor: '#009387'}]}>
                    <Text style={styles.buttonText}>立即更新</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
        )}
        {updateData.isUpdate && updateData.isUploadPacke && (
          <View style={styles.contentArea}>
            <Text style={[styles.header, {color: '#333'}]}>
              正在更新下载,请稍候...
            </Text>
            <ProgressBar
              progress={updateData.progress}
              height={10}
              width={260}
            />
            <Text style={[styles.header, {fontSize: 30}]}>
              {updateData.progress * 100 + '%'}
            </Text>
          </View>
        )}
        {updateData.showAskUpdateContent && (
          <View style={styles.askUpdateContent}>
            <IconFont
              name="iconicon-test1"
              size={80}
              color="green"
              style={styles.iconhuojian2}
            />
            <Text style={styles.downloadCompleteTitle}>安装包下载完毕</Text>
            <View style={styles.buttonsArea}>
              <TouchableNativeFeedback onPress={onAppRestartCancel}>
                <View style={[styles.buttons, {backgroundColor: '#DB4C40'}]}>
                  <Text style={[styles.buttonText]}>下次再说</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={onAppRestart}>
                <View style={[styles.buttons, {backgroundColor: '#009387'}]}>
                  <Text style={styles.buttonText}>立即重启</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  contentArea: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    color: '#DB4C40',
    marginTop: 20,
    marginBottom: 10,
  },
  updateDes: {
    width: 300,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header_bg: {
    width: 300,
    height: 100,
    marginBottom: -20,
  },
  titleWrapper: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  packageSize: {
    color: 'red',
    marginBottom: 10,
  },
  binaryModifiedTime: {
    paddingVertical: 10,
    fontSize: 14,
  },
  label: {
    color: '#fff',
    fontSize: 30,
  },
  linearHeader: {
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  buttonArea: {
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsArea: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  buttons: {
    width: 105,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  progress: {
    height: 20,
    width: 200,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 10,
  },
  iconhuojian2: {
    // position: 'absolute',
    // top: -100,
  },
  askUpdateContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  downloadCompleteTitle: {
    fontSize: 20,
  },
});

export default HotPushModal;
