import React from 'react';
import materialTheme from "../constants/Theme";
import Images from "../constants/Images";
import {Block, Button, Input, Text, theme} from "galio-framework";
import {Dimensions, ImageBackground, StatusBar, StyleSheet} from "react-native"

const { height, width } = Dimensions.get('screen');


export default class SignUp extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Block flex style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Block flex center>
                    <ImageBackground
                        source={{ uri: Images.SignuUp }}
                        style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
                    />
                </Block>
                <Block flex space="between" style={styles.padded}>
                    <Block flex space="around" style={{ zIndex: 2 }}>
                        <Block>
                            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                                <Input
                                    right
                                    placeholder="Username"
                                    placeholderTextColor={materialTheme.COLORS.BLACK}
                                    color={materialTheme.COLORS.BLACK}
                                    style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                                />
                            </Block>
                            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                                <Input
                                    type="email-address"
                                    right
                                    placeholder="Email"
                                    placeholderTextColor={materialTheme.COLORS.BLACK}
                                    style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                                />
                            </Block>
                            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                                <Input
                                    right
                                    password={true}
                                    placeholder="Password"
                                    placeholderTextColor={materialTheme.COLORS.BLACK}
                                    style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                                />
                            </Block>
                        </Block>
                        <Block center>
                            <Button
                                shadowless
                                style={styles.button}
                                color={materialTheme.COLORS.BUTTON_COLOR}
                                onPress={() => navigation.navigate('Home')}>
                                REGISTER
                            </Button>
                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.BLACK,
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'relative',
        bottom: theme.SIZES.BASE,
    },
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    }
});