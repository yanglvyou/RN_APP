import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableNativeFeedback,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native';
import CodePush from 'react-native-code-push';
// 安卓下的热更新 CODE_PUSH_KEY
const CODE_PUSH_KEY = 'yuCW8NX_EzOpz69pJJNQqdrPDuhC_wpDVICBi';
// 屏幕
const win = Dimensions.get('window');
class HotpushModal extends PureComponent {
  constructor(props) {
    super(props);
    this.syncMessage = '';
    this.state = {
      modalVisible: false,
      isMandatory: false,
      isUpdate: false,
      updateInfo: {},
      progress: 0,
    };
  }

  componentDidMount() {
    // 热更新
    CodePush.notifyAppReady();
    // 检查更新
    this.check();
  }

  // 检查更新
  check = () => {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then((update) => {
      console.log(update);
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
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      this.codePushStatusDidChange,
      this.codePushDownloadDidProgress,
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
          this.syncMessage = 'App up to date.';
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          this.syncMessage = 'Update cancelled by user';
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
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
        Math.round((Progress.receivedBytes / Progress.totalBytes) * 100) / 100;
      if (currProgress >= 1) {
        this.setState({modalVisible: false});
      } else {
        this.setState({
          progress: currProgress,
        });
      }
    }
  };

  render() {
      console.log(1111111111);
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.content}>
          {!this.state.isUpdate ? (
            <View style={styles.contentArea}>
              <Text
                style={[styles.header, {}]}>
                发现新版本
              </Text>
              <View style={styles.updateDes}>
                <Text style={styles.title}>更新内容</Text>
                <Text
                  style={[
                    styles.description,

                  ]}>
                  {this.state.updateInfo.description || '暂无版本介绍'}
                </Text>
              </View>
              {/* 按钮,判断是否强制更新 */}
              {this.state.isMandatory ? (
                <View style={styles.buttonArea}>
                  <TouchableNativeFeedback onPress={this.update}>
                    <View
                      style={[
                        styles.button,
                        {backgroundColor: 'red'},
                      ]}>
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
                      style={[
                        styles.buttons,
                         {backgroundColor:'#ccc'}
                      ]}>
                      <Text style={styles.buttonText}>立即更新</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.contentArea}>
              <Text
                style={[styles.header, {color: '#333'}]}>
                正在更新下载,请稍等
              </Text>
              <ProgressBarAndroid
                color='#f58'
                indeterminate={false}
                progress={this.state.progress}
                styleAttr="Horizontal"
                style={styles.progress} />
              <Text
                style={[
                  styles.header,
                  {fontSize: 18},
                ]}>
                {this.state.progress * 100 + '%'}
              </Text>
            </View>
          )}
          {/*<Toast ref={(toast) => this.toast = toast}></Toast>*/}
        </View>
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
    // height:400,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  updateDes: {
    width: 300,
    paddingLeft: 30,
    paddingRight: 30,
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
});
