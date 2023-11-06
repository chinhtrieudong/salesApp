// import { View } from 'react-native';
// // import { Alert } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { notifActions } from '../../store/notif-slice';
// import Toast from 'react-native-toast-message';

// const Notification = ({ type, message }) => {
//     const notification = useSelector((state) => state.notification.open);
//     const dispatch = useDispatch();
//     const handleClose = () => {
//         dispatch(
//             notifActions.ShowNotification({
//                 open: false,
//             }),
//         );
//     };
//     Toast.show({
//         type: type,
//         text1: message,
//     });
//     return (
//         <View>
//             <Toast visibilityTime={3000} position="top" topOffset={20} />
//         </View>
//     );
// };

// export default Notification;
