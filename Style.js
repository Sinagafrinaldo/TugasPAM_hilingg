import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#86b257',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 300
    },
    menu: {
        width: 26,
        height: 26,
        position: 'absolute',
        marginTop: 55,
        marginLeft: 30,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    user: {
        width: 26,
        height: 26,
        position: 'absolute',
        marginTop: 55,
        paddingRight: 70,
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: 'flex-end'
    },
    judul: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
    },
    head: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 50
    },
    judul2: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        marginTop: 60,
        fontSize: 30
    },
    content: {
        backgroundColor: 'white',
        margin: 40,
        marginTop: -250,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    box: {
        margin: 5,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,

        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 12
    },
    gambar: {
        width: 26,
        height: 26,
        position: 'absolute',
        paddingTop: 50,
        marginLeft: 10,
        resizeMode: 'contain',
        tintColor: '#86b257',
    },
    button: {
        backgroundColor: '#ed7d31',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    teks: {
        color: 'white',

        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    daftar: {
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 2,
    },
    teks1: {

        fontSize: 16,
        fontWeight: 'bold'
    },
    footer: {
        textAlign: 'center',
        color: 'gray',
        alignItems: 'center',
        paddingTop: 100
    },
    asal: {

        alignSelf: 'flex-start',

        color: '#565756',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tujuan: {
        position: 'absolute',
        alignSelf: 'flex-end',

        color: '#565756',
        fontSize: 15,
        paddingRight: 20,
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    maskapai: {
        alignSelf: 'flex-start',
        marginLeft: 70,
        position: 'absolute',
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    tanggal: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#3d619f',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15
    },
    garis: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    pemisah: {
        marginTop: 15
    },
    container2: {
        flex: 1,
        backgroundColor: '#86b257',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        paddingBottom: 20,
        marginBottom: 10,
        height: 150
    },
    panah: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: 'center',
        position: 'absolute',

    },
    pembungkus_panah: {
        height: 40,
        width: 60,
        borderRadius: 20,
        marginLeft: 30,
        marginTop: 50,
    },
    logo_maskapai: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }

})

export default styles