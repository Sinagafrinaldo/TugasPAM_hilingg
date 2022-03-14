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

