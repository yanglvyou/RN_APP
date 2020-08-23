import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableNativeFeedback,
  Image,
  AppState,
  Platform,
} from 'react-native';
import CodePush from 'react-native-code-push';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';
import IconFont from '@/assets/iconfont';
// ios Production=1CfQKqiExW0wxcsFPynPPzMsRhmHM_e56T9rPB ;Staging=LIoaqqdF2JPClh3eQ2htRTFc2SoL5TX47HcE5;

// android Production=1qnDSWmgkkDs2N7pXTmH8o8tqm2e9GTZ-sG1vd ;Staging=yuCW8NX_EzOpz69pJJNQqdrPDuhC_wpDVICBi;

// 安卓下的热更新 CODE_PUSH_KEY
const CODE_PUSH_KEY =
  Platform.OS === 'ios'
    ? '1CfQKqiExW0wxcsFPynPPzMsRhmHM_e56T9rPB'
    : '1qnDSWmgkkDs2N7pXTmH8o8tqm2e9GTZ-sG1vd';
// 屏幕
class HotpushModal extends PureComponent {
  constructor(props) {
    super(props);
    this.syncMessage = '';
    this.SyncStatusCode = 0;
    this.state = {
      modalVisible: false, // 热更新弹窗
      isMandatory: false, // 是否强制更新
      isUpdate: false, // 是否有新版本
      updateInfo: {},
      binaryModifiedTime: '', // 更新时间
      CodePushRelease: '',
      uploadDone: false,
      progress: 0,
      packageSize: 0,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', (newState) => {
      if (newState === 'active') {
        CodePush.notifyAppReady();
        this.getUpdateMetadata();
        // 检查更新
        this.checkUpdate();
      }
    });
  }

  // 检查更新
  checkUpdate = () => {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then((update) => {
      console.log('update: ', update);
      if (!update || update.failedInstall) {
        // 已是最新版
      } else {
        this.setState({
          modalVisible: true,
          updateInfo: update,
          isMandatory: update.isMandatory,
        });
      }
    });
  };

  getUpdateMetadata = () => {
    CodePush.getUpdateMetadata().then((update) => {
      if (update) {
        const updateTime = new Date(Number(update.binaryModifiedTime));
        this.setState({
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
  update = () => {
    this.setState({isUpdate: true});
    CodePush.sync(
      {
        deploymentKey: CODE_PUSH_KEY,
        updateDialog: false,
        // installMode: CodePush.InstallMode.IMMEDIATE,
        // installMode: CodePush.InstallMode.ON_NEXT_RESTART,
      },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this),
    );
  };

  // 取消
  onCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  // 下载状态变化
  codePushStatusDidChange = (syncStatus) => {
    if (this.state.isUpdate) {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          this.syncMessage = 'Checking for update';
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          this.syncMessage = 'Downloading package';
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          this.syncMessage = 'Awaiting user action';
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          this.syncMessage = 'Installing update';
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          this.syncMessage = '该应用程序已配置了部署的最新信息';
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          this.syncMessage = 'Update cancelled by user';
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          this.setState({uploadDone: true});
          this.syncMessage = 'Update installed and will be applied on restart.';
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          this.syncMessage = 'An unknown error occurred';
          this.setState({modalVisible: false});
          break;
      }
    }
  };

  // 计算下载进度
  codePushDownloadDidProgress = (Progress) => {
    if (this.state.isUpdate) {
      let currProgress =
        Math.floor((Progress.receivedBytes / Progress.totalBytes) * 100) / 100;
      this.setState({
        progress: currProgress,
      });
      if (currProgress >= 1) {
        this.setState({uploadDone: true});
        // this.setState({modalVisible: false});
      }
    }
  };

  onAppRestartCancel() {
    this.setState({modalVisible: false});
  }

  onAppRestart() {
    CodePush.restartApp();
  }

  render() {
    const packageSize = parseInt(this.state.packageSize / 1024);
    const {binaryModifiedTime, uploadDone} = this.state;
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.content}>
          {!this.state.isUpdate && (
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
                    发现新版本{this.state.CodePushRelease}
                  </Text>
                </View>
                <Image
                  style={styles.header_bg}
                  resizeMode="contain"
                  source={require('../../assets//updata.png')}
                />
              </LinearGradient>
              {Number(packageSize) !== 0 && (
                <Text style={styles.packageSize}>
                  更新包大小{packageSize}KB
                </Text>
              )}
              <View style={styles.updateDes}>
                {binaryModifiedTime.length > 0 && (
                  <Text style={styles.binaryModifiedTime}>
                    版本更新时间:{binaryModifiedTime}
                  </Text>
                )}
                <Text style={styles.title}>更新内容:</Text>
                <Text style={[styles.description]}>
                  {this.state.updateInfo.description || '暂无版本介绍'}
                </Text>
              </View>
              {/* 按钮,判断是否强制更新 */}
              {this.state.isMandatory ? (
                <View style={styles.buttonArea}>
                  <TouchableNativeFeedback onPress={this.update}>
                    <View style={[styles.button, {backgroundColor: '#009387'}]}>
                      <Text style={styles.buttonText}>立即更新</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              ) : (
                <View style={styles.buttonsArea}>
                  <TouchableNativeFeedback onPress={this.onCancel}>
                    <View
                      style={[styles.buttons, {backgroundColor: '#DB4C40'}]}>
                      <Text style={[styles.buttonText]}>残忍拒绝</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={this.update}>
                    <View
                      style={[styles.buttons, {backgroundColor: '#009387'}]}>
                      <Text style={styles.buttonText}>立即更新</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              )}
            </View>
          )}
          {this.state.isUpdate && !uploadDone && (
            <View style={styles.contentArea}>
              <Text style={[styles.header, {color: '#333'}]}>
                正在更新下载,请稍候...
              </Text>
              <ProgressBar
                progress={this.state.progress}
                height={10}
                width={260}
              />
              <Text style={[styles.header, {fontSize: 30}]}>
                {this.state.progress * 100 + '%'}
              </Text>
            </View>
          )}
          {uploadDone && !this.state.isMandatory && (
            <View style={styles.askUpdateContent}>
              <IconFont
                name="iconicon-test1"
                size={80}
                color="green"
                style={styles.iconhuojian2}
              />
              <Text style={styles.downloadCompleteTitle}>安装包下载完毕</Text>
              <View style={styles.buttonsArea}>
                <TouchableNativeFeedback
                  onPress={this.onAppRestartCancel.bind(this)}>
                  <View style={[styles.buttons, {backgroundColor: '#DB4C40'}]}>
                    <Text style={[styles.buttonText]}>下次再说</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.onAppRestart.bind(this)}>
                  <View style={[styles.buttons, {backgroundColor: '#009387'}]}>
                    <Text style={styles.buttonText}>立即重启</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          )}
        </View>
        {!this.state.isUpdate && (
          <View style={styles.modalClose}>
            <TouchableNativeFeedback onPress={this.onCancel.bind(this)}>
              <IconFont
                name="iconguanbi"
                size={40}
                // color="#fff"
                style={styles.iconguanbi}
              />
            </TouchableNativeFeedback>
          </View>
        )}
      </Modal>
    );
  }
}

export default HotpushModal;
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
  modalClose: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
  },
  iconguanbi: {},
});
