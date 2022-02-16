import {Alert} from 'react-native';

const HTalert = (
  title = 'My Alert Title',
  subject = 'My Alert Msg',
  onDismiss = 'This alert was dismissed by tapping outside of the alert dialog.',
  cancelMessage = 'Cancel Msg',
) =>
  Alert.alert(title, subject, [
    {
      text: 'ok',
      style: 'cancel',
    },
  ]);

export {HTalert};
