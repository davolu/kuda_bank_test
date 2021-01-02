import {Platform, StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.1,
        borderBottomWidth: 0,
        paddingTop: Metrics.HEIGHT * 0.05,
        elevation: 0,
        paddingLeft: Metrics.WIDTH * 0.05,
        paddingRight: Metrics.WIDTH * 0.05,
      },
    
      left: {
        flex: 0.5,
      },
    
      body: {
        flex: 3,
        alignSelf: 'center',
      },
    
      right: {
        flex: 0.5,
      },
});

export default styles;
