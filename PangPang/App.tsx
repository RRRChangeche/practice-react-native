import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';

type SectionProps = {
  title: string;
};

function Section({title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View style={styles.sectionContainer}></View>;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);
  const [videoPath, setVideoPath] = useState('./assets/video1.mp4'); // Initial video path

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const videoRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  const onVideoEnd = () => {
    closeModal();
  };

  const onButton1Press = () => {
    setVideoPath('./assets/video1.mp4'); // Set video path for Button 1
    openModal();
  };

  const onButton2Press = () => {
    setVideoPath('./assets/video2.mp4'); // Set video path for Button 2
    openModal();
  };

  const onButton3Press = () => {
    setVideoPath('./assets/video3.mp4'); // Set video path for Button 3
    openModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.backgroundImage}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Section title="Custom Section" />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onButton1Press}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onButton2Press}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onButton3Press}>
            <Text style={styles.buttonText}>Button 3</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={closeModal}>
          <Video
            ref={videoRef}
            source={videoPath}
            style={{width: screenWidth, height: screenWidth * 0.5625}}
            fullscreen={true}
            resizeMode="cover"
            onEnd={onVideoEnd}
            paused={false}
          />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;
