## Nama: Frinaldo Sinaga
## NIM: 119140064
## Kelas: PAM RC

>
Source code berada pada :
>App.js


>Style.js

Asset gambar serta icon berada pada folder
>assets

Data penerbangan berada pada file JSON:
>Data_penerbangan.json

Modul yang dipakai hanya diimport dari ```react-native``` dan juga dari ```react``` , untuk navigasi dibuat menggunakan state berdasarkan kondisi mencari atau saat tidak mencari.
Saat tidak mencari maka di aplikasi akan tampil menu awal, dan ketika dilakukan pencarian, maka state akan berubah menjadi konsisi mencari sehingga screen dapat berubah.

### Tampilan Utama
Saat aplikasi dibuka maka akan tampil halaman utama seperti dibawah:

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/tampilan_utama.jpeg" width="30%" height="30%">


### Validasi Sederhana Form kosong
Jika form tidak diisi dan tombol pencarian di tekan maka akan muncul alert.

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/validasi_form_kosong.jpeg" width="30%" height="30%">


### Validasi Sederhana Tujuan dan Asal
Saat inputan tujuan dan asal penerbangan sama , maka akan mendapat alert notifikasi :

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/validasi1.jpeg" width="30%" height="30%">

### Contoh pencarian dan hasil pencarian berdasarkan ketiga isi form
Pengisian Form:

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/pencarian1-1.jpeg" width="30%" height="30%">

Hasil pencarian:

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/pencarian1.jpeg" width="30%" height="30%">

### Contoh pencarian hanya berdasarkan bulan dan tahun

Pengisian Form:

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/pencarian_hanya_tgl.jpeg" width="30%" height="30%">

Hasil Pencarian:

<img src="https://raw.githubusercontent.com/Sinagafrinaldo/TugasPAM_hilingg/main/ss_aplikasi/pencarian_hanya_tgl1.jpeg" width="30%" height="30%">

### App.js
```
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import styles from './Style'

const data = require('./Data_penerbangan.json')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: data,
      searchfilter: data,
      asal: '',
      tujuan: '',
      tanggal: '',
      isCari: false,
      menu1: true,
    }
  }

  getImage = (image) => {
    switch (image) {
      case "garuda":
        return require("./assets/garuda.png")
        break;
      case "lion":
        return require("./assets/lion.png")
        break;
      case "batik":
        return require("./assets/batik.png")
        break;
    }
  }

  kembali(asal1, tujuan1, tanggal1) {
    if (asal1 == '' && tujuan1 == '' && tanggal1 == '') {
      this.setState({
        isCari: false
      })
      this.setState({
        menu1: true
      })
    }
  }

  search(asal1, tujuan1, tanggal1) {
    if (asal1 == '' && tujuan1 == '' && tanggal1 == '') {
      Alert.alert("Kesalahan", "Maaf silahkan isi minimal salah satu kategori.")
      this.setState({
        isCari: false
      })
      this.setState({
        menu1: true
      })
    } else if (asal1 == tujuan1 && asal1 != '' && tujuan1 != '') {
      Alert.alert("Kesalahan", "Maaf Tujuan dan Asal kota harus berbeda.")
    }
    else {
      this.setState({
        menu1: false
      })
      this.setState({
        isCari: true
      })
      this.setState({
        searchfilter: this.state.alldata.filter(i =>
          i.bandara_kode_keberangkatan.toUpperCase().includes(asal1.toUpperCase()) && i.bandara_kode_tujuan.toUpperCase().includes(tujuan1.toUpperCase()) && i.jadwal_id.toUpperCase().includes(tanggal1.toUpperCase()),
        ),
      })
    }
  }
  render() {
    const { asal, tujuan, tanggal, isCari, menu1, } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>

        {menu1 && (
          <>
            <View style={styles.container}>

              <TouchableOpacity>
                <Image source={require('./assets/menu.png')}
                  style={styles.menu}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={require('./assets/user.png')}
                  style={styles.user}
                />
              </TouchableOpacity>

              <Text style={styles.judul2}>Hiling.id</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.teks1}>Lokasi Keberangkatan</Text>
              <View>
                <Image source={require('./assets/plane.png')}
                  style={styles.gambar}
                />

                <TextInput
                  value={asal}
                  onChangeText={(asal) => this.setState({ asal })}
                  style={styles.box}
                  placeholder='Masukkan Lokasi Keberangkatan'>
                </TextInput>

              </View>

              <Text style={styles.teks1}>Lokasi Tujuan</Text>

              <View>
                <Image source={require('./assets/plane_land.png')}
                  style={styles.gambar}
                />

                <TextInput
                  value={tujuan}
                  onChangeText={(tujuan) => this.setState({ tujuan })}
                  style={styles.box}
                  placeholder='Masukkan Lokasi Tujuan'>
                </TextInput>

              </View>

              <Text style={styles.teks1}>Tanggal Keberangkatan</Text>

              <View>
                <Image source={require('./assets/calendar.png')}
                  style={styles.gambar}
                />

                <TextInput
                  value={tanggal}
                  onChangeText={(tanggal) => this.setState({ tanggal })}
                  style={styles.box}
                  placeholder='Contoh: 26 Maret 2022'>
                </TextInput>

              </View>

              <TouchableOpacity
                onPress={() => this.search(asal, tujuan, tanggal)}
                style={styles.button}>
                <Text style={styles.teks}>Cari</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.footer}>
              <Text>Copyright by Frinaldo Sinaga - 119140064</Text>
            </View>
          </>
        )}

        {isCari && (
          <View style={styles.container2}>

            <TouchableOpacity onPress={() => this.kembali('', '', '')}
              style={styles.pembungkus_panah}
            >
              <Image source={require('./assets/panah.png')}
                style={styles.panah}
              />
            </TouchableOpacity>

            <Image source={require('./assets/user.png')}
              style={styles.user}
            />
            <View style={styles.head}>
              <Text style={styles.judul}>Hiling.id</Text>

              <Text style={styles.teks}>Hasil Pencarian Tanggal : {tanggal}</Text>
            </View>
          </View>
        )}

        {isCari && this.state.searchfilter.map((item, index) => (

          <View key={index} style={styles.daftar}>

            <Text style={styles.asal}>{item.bandara_kode_keberangkatan} ({item.bandara_kode})</Text>
            <Text style={styles.garis}> - </Text>
            <Text style={styles.tujuan}>{item.bandara_kode_tujuan}</Text>

            <View style={styles.pemisah}>
              <Image source={this.getImage(item.maskapai_logo)}
                style={styles.logo_maskapai}
              />

              <Text style={styles.maskapai}>{item.maskapai_nama} </Text>
              <Text style={styles.tanggal}>{item.jadwal_id}</Text>
            </View>

          </View>

        ))}


        {isCari && (
          <Text style={styles.footer}>Copyright by Frinaldo Sinaga - 119140064</Text>
        )}

      </ScrollView>
    )
  }
}

```

### Style.js

```
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

```
