import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../const/Colors';

export const CustomButton = ({
  titleSize,
  onPress,
  title,
  color,
  type,
  gradient,
  titleColor,
  icon,
  nospace,
  border,
  iconRight,
  radius,
}) =>
  gradient ? (
    <Button
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#96deda', '#50c9c3'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      onPress={onPress}
      buttonStyle={[
        styles.button,
        titleSize ? { fontSize: titleSize } : null,
        { borderRadius: radius || 30 },
      ]}
      containerStyle={styles.container}
      type={type}
      title={title}
      titleStyle={nospace ? styles.titleNoSpace : styles.title}
    />
  ) : (
    <Button
      iconContainerStyle={styles.buttonNoGradient}
      // icon={
      //    icon ? <Icon name={icon} size={20} color="white" margin={20} /> : null
      // }
      iconLeft
      iconRight
      onPress={onPress}
      buttonStyle={[
        styles.button,
        {
          backgroundColor: color,
          justifyContent: 'space-around',
          borderRadius: radius || 30,
        },
      ]}
      containerStyle={border ? styles.noGradientBorder : null}
      type={type}
      title={title}
      titleStyle={[styles.title, { color: titleColor || 'white' }]}
      color={color}
    />
  );

const styles = StyleSheet.create({
  button: {
    borderColor: 'transparent',
  },
  title: {
    marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    // fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    letterSpacing: 2,
  },
  titleNoSpace: {
    paddingVertical: 0,
    margin: 0,
    alignSelf: 'center',
    // fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    letterSpacing: 2,
  },
  container: {},
  buttonNoGradient: {
    marginVertical: 5,
    paddingHorizontal: 40,
    flex: 1,
    alignSelf: 'flex-start',
    //
  },
  noGradientBorder: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.purple,
  },
});
