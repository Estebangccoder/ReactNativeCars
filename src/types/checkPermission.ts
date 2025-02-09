import {Alert, Platform} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';


  export const openCamera = async (setImageUri: any) => {
    const response = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
    });
    if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri || null);
    }
  };

  export const openGallery = (setImageUri: any) => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };


  export const checkOrRequestCameraPermission = async (setImageUri: any) => {
    const result = await check(PERMISSIONS.ANDROID.CAMERA);
    if (result === RESULTS.GRANTED) {
      openCamera(setImageUri);
    } else if (result === RESULTS.DENIED || result === RESULTS.LIMITED) {
      const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
      if (requestResult === RESULTS.GRANTED) {
        openCamera(setImageUri);
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera access is required to take a photo.',
        );
      }
    } else {
      Alert.alert(
        'Permission Error',
        'Camera access has been permanently denied. Enable it in settings.',
      );
      return false;
    }
  };

  export const checkOrRequestGalleryPermissions = async (setImageUri: any): Promise<boolean>=> {
    const version = Number(Platform.Version);
    const galleryPermission =
      version >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await check(galleryPermission);

    if (result === RESULTS.GRANTED) {
      openGallery(setImageUri);
      return true;
    } else if (result === RESULTS.DENIED || result === RESULTS.LIMITED) {
      const requestResult = await request(galleryPermission);
      if (requestResult === RESULTS.GRANTED) {
        openGallery(setImageUri);
        return true;
      } else {
        Alert.alert(
          'Permission Denied',
          'Gallery access is required to select an image.',
        );
        return false;
      }
    } else {
      Alert.alert(
        'Permission Error',
        'Gallery access has been permanently denied. Enable it in settings.',
      );
      return false;
    }
  };
