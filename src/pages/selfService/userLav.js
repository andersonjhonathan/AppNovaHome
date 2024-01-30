import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export function UserLav (){
    return (
        <View>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.texts}>
                        <Text style={styles.txtSaldo}>Saldo atual</Text>
                        <Text style={styles.valorSaldo}>R$ 100,00</Text>
                    </View>

                    <TouchableOpacity style={styles.btnSaldo}>
                        <Text style={styles.btnTxt}>Adicionar Saldo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    modal:{
        backgroundColor: '#01B1EC',
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 5,
        width: '90%',
        borderTopWidth: 1,
        borderColor: '#DEE2E6',
    },
    texts:{
        marginTop: 20,
    },
    btnSaldo:{
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
    btnTxt:{
        color: '#FFFFFF',
        fontSize: 15,
    },
    txtSaldo:{
        color: '#FFFFFF',
        fontSize: 14,
    },
    valorSaldo:{
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat'
    },
    
})