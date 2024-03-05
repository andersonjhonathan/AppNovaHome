import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

export function Payment({ navigation }) {

    function openPaymentPix() {
        navigation.navigate('paymentPix')
    }

    function openAddCard() {
        navigation.navigate('addCard')
    }

    const [hideValor, setHideValor] = useState(true)
    const [favoritar, setFavoritar] = useState(true)
    const [favoritar1, setFavoritar1] = useState(true)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.texts}>
                        <Text style={styles.txtSaldo}>Saldo atual</Text>

                        <View style={styles.txtBtnSaldo}>
                            {
                                hideValor ? (
                                    <Text style={styles.valorSaldo}>R$ 100,00</Text>
                                ) : (
                                    <Text style={styles.valorSaldo}>R$ *****</Text>
                                )
                            }
                            <TouchableOpacity style={styles.btnIcon} onPress={() => setHideValor(!hideValor)}>
                                {
                                    hideValor ?
                                        <Ionicons name='eye' color='#FFF' size={24} />
                                        :
                                        <Ionicons name='eye-off-outline' color='#FFF' size={24} />
                                }
                            </TouchableOpacity>
                            <Text style={styles.txtLocal}>
                                Porto Alegre | Zaffari {'\n'}Teresópolis
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
            <Text style={styles.txtTitle}>Selecione a forma de pagamento</Text>

            <View style={styles.card}>
                <Ionicons name='card' color='#a7a7a7' size={33} />
                <View style={styles.infoCard}>
                    <Text style={styles.titleInfoCard}>Cartão de Crédito</Text>
                    <Text style={styles.subTitleInfoCard}>**** **** **** 4321</Text>
                </View>
                <View style={styles.conteinerIcones}>
                    <TouchableOpacity onPress={() => setFavoritar(!favoritar)}>
                        {
                            favoritar ?
                                <Ionicons name='heart-outline' color='#a7a7a7' size={25} style={styles.icones} />
                                :
                                <Ionicons name='heart-sharp' color='#01B1EC' size={25} style={styles.icones} />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='pencil-sharp' color='#a7a7a7' size={25} style={styles.icones} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='trash-outline' color='#a7a7a7' size={25} style={styles.icones} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.card}>
                <Ionicons name='card' color='#a7a7a7' size={33} />
                <View style={styles.infoCard}>
                    <Text style={styles.titleInfoCard}>Cartão de Crédito</Text>
                    <Text style={styles.subTitleInfoCard}>**** **** **** 4321</Text>
                </View>
                <View style={styles.conteinerIcones}>
                    <TouchableOpacity onPress={() => setFavoritar1(!favoritar1)}>
                        {
                            favoritar1 ?
                                <Ionicons name='heart-outline' color='#a7a7a7' size={25} style={styles.icones} />
                                :
                                <Ionicons name='heart-sharp' color='#01B1EC' size={25} style={styles.icones} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='pencil-sharp' color='#a7a7a7' size={25} style={styles.icones} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='trash-outline' color='#a7a7a7' size={25} style={styles.icones} />
                    </TouchableOpacity>

                </View>
            </View>

            <TouchableOpacity style={styles.btnAddCard} onPress={openAddCard}>
                <Ionicons name='card' color='#a7a7a7' size={33}></Ionicons>
                <Text style={styles.titleInfoCard}>  Adicionar Cartão</Text>
                <Ionicons name='add-circle' color='#a7a7a7' size={30} style={styles.soloIcon}></Ionicons>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnAddCard} onPress={openPaymentPix}>
                <Image
                    source={require('../../assets/icons8-foto-33.png')}
                />
                <View style={styles.infoCard}>
                    <Text style={styles.titleInfoCard}>Pix</Text>
                    <Text style={styles.subTitleInfoCard}>Pagamento online</Text>
                </View>
                <View style={styles.novo}>
                    <Text style={styles.txtNovo}>NOVO</Text>
                </View>
                <Ionicons name='chevron-forward' color='#a7a7a7' size={30} style={{ marginLeft: 10 }} />
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#01B1EC',
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
    },
    txtNovo: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    novo: {
        marginLeft: 40,
        backgroundColor: '#a7a7a7',
        width: 55,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    soloIcon: {
        marginLeft: 105,
    },
    icones: {
        marginRight: 4,
    },
    conteinerIcones: {
        marginLeft: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conteinerIconePix: {
        marginRight: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleInfoCard: {
        fontWeight: 'bold',
        marginTop: 2,
        fontSize: 15,
        color: '#a7a7a7',
    },
    subTitleInfoCard: {
        color: '#6f6f6f',
    },
    infoCard: {
        marginLeft: 12,
    },
    card: {
        flexDirection: 'row',
        width: "90%",
        height: 80,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 12,
        marginBottom: 15,
        elevation: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 5,
        width: '90%',
        borderTopWidth: 1,
        borderColor: '#DEE2E6'
    },
    texts: {
        marginTop: 20,
    },
    btnSaldo: {
        marginTop: 25,
        color: '#FFFFFF',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 38,
    },
    txtSaldo: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    valorSaldo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'
    },
    btnIcon: {
        paddingLeft: 5,
        paddingTop: 1,
    },
    txtBtnSaldo: {
        flexDirection: 'row',
    },
    txtLocal: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 75,
        marginTop: -15,
    },
    txtTitle: {
        paddingTop: 25,
        paddingLeft: 16,
        fontSize: 20,
        color: '#002F6E',
        fontWeight: '500',
        marginBottom: 13,
    },
    btnAddCard: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 59,
        right: 5,
        height: 80,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 2,
        marginRight: 15,
        marginLeft: 25,
        elevation: 1,
    },
})