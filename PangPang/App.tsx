import React, { useState, useRef } from 'react';
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
} from 'react-native';
import Video from 'react-native-video';

type SectionProps = {
  title: string;
};

function Section({ title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View style={styles.sectionContainer}></View>;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false); // Control the Modal's visibility

  const openModal = () => {
    setModalVisible(true); // Open the Modal when the button is pressed
  };

  const closeModal = () => {
    setModalVisible(false); // Close the Modal
  };

  const videoRef = useRef(null); // Reference to the video player

  const onVideoEnd = () => {
    closeModal(); // Close the Modal after the video is finished
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
        {/* Button at the bottom of the screen */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        {/* Gray transparent background */}
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1} // Disable default touch feedback
          onPress={closeModal}>
          {/* Video Player */}
          <Video
            ref={videoRef}
            source={require('./assets/your_short_video.mp4')}
            style={styles.video}
            fullscreen={true} // Play video in fullscreen mode
            resizeMode="cover"
            onEnd={onVideoEnd}
            paused={false} // Start playing the video when modal is opened
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
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent gray background color
  },
  video: {
    flex: 1,
  },
});

export default App;
