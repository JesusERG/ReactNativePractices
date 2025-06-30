import { View, Button, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRef } from 'react';

const WebViewScreen = () => {
  const webViewRef = useRef<WebView | null>(null);

  const handleGoBack = () => {
    webViewRef.current?.goBack();
  };

  const handleGoForward = () => {
    webViewRef.current?.goForward();
  };

  const handleReload = () => {
    webViewRef.current?.reload();
  };

  const handleClearHistory = () => {
    webViewRef.current?.clearHistory();
  };

//   const handleReceiveMessage = (event: any) => {
//     console.log('Received message:', event.nativeEvent.data);
//   };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://reactnative.dev/' }}
        style={{ flex: 2 }}
        ref={webViewRef}
      />
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}
      >
        <Button title="←" onPress={handleGoBack} />
        <Button title="⟳" onPress={handleReload} />
        {Platform.OS === 'android' && (
          <Button title="🗑" onPress={handleClearHistory} />
        )}
        <Button title="→" onPress={handleGoForward} />
      </View>
    </View>
  );
};

export default WebViewScreen;
