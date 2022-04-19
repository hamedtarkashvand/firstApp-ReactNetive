import {Alert} from 'react-native';

const HtAlert = (
    title:string = 'My Alert Title',
    subject:string = 'My Alert Msg',
    onDismiss:string = 'This alert was dismissed by tapping outside of the alert dialog.',
    cancelMessage:string = 'Cancel Msg'
  ) =>Alert.alert(
    title, subject, [
    {
      text: 'ok',
      style: 'cancel',
    },
  ]);

export {HtAlert};
