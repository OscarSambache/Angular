import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  mostrarHola = true;
  arregloNumeros = [1, 2, 3, 4, 5, 6];

  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-qBM29u2l2RQ/Wtbr6Kf_O_I/AAAAAAABIaM/O8Pvb-8FkPYL1cCjl9Iuv0PrCa5Y0PwNACLcBGAs/s640/21.jpg'
    },

  ];
  arregloPeliculas2 =  [
      {
        nombre: 'Black Panter',
        descripcion: '',
        esEstreno: true,
        urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-cer-MDx0pjI/Wule4fPRBBI/AAAAAAABIxk/w-bvH1NYm2Usluj5XOvG9iKVf42riOIZACLcBGAs/s320/21.jpg'
      },
      {
        nombre: 'Maze Runner: the Death Cure',
        descripcion: '',
        esEstreno: true,
        urlImagen: "https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-9cqXBbRWCo0/Wszm1D3qG1I/AAAAAAABIOE/Ctruh8J5oIUbxQkwVgtvKqYgXLjMJS38wCLcBGAs/s320/21.jpg"
      },
      {
        nombre: 'Star Wars: The Last Jedi',
        descripcion: '',
        esEstreno: true,
        urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-yqJSNm11448/WqQRmB8hAMI/AAAAAAABHiE/NisVeejgFTcdioxsELm6J_j6vTprjZ7uACLcBGAs/s320/21.jpg'
      },
      {
        nombre: 'Justice League',
        descripcion: '',
        esEstreno: true,
        urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
      },
    ];
  arregloPeliculas3 = [
    {
      nombre: 'Sharry Baby',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-Z3YVbb8Tg2o/WwCD7zjd1PI/AAAAAAABJG4/VoPvV8mYzv0DbcSTpE9Ver1Zcg7C3JAhQCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'Running on Karma',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-u-CpGRUsPjw/WwCAWXcDFBI/AAAAAAABJGs/h0rUeslj6yMxxZl8ektPuFDQ13Db4N6JQCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'Outrage Coda',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-GLOiL4May2k/WwB876upXBI/AAAAAAABJGg/TFb2cVetpckUSKOWyLGNXZxlNQJngPszQCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'Dark Crimes',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-2SvRVapy39w/WwB5VUYRZdI/AAAAAAABJGU/KGCuodI7EP4J9mlU32NWTRmgxxHlMmmkgCLcBGAs/s320/21.jpg',
    }
  ];
  arregloPeliculas3_2=[
    {
      nombre: 'The Divine Weapon',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://1.bp.blogspot.com/--39FgNsf1as/WwB1ModcwzI/AAAAAAABJGI/bYbRbW2gkRAaAB1lPq0CrDqFp9KgBXThQCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'The Long Good Friday',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-bdskT08S10k/WwBqFPx5ldI/AAAAAAABJF8/hx_PrfWWQoUE4KCCZlUnSW4boADAHFliwCLcBGAs/s320/21.jpg'

    },
    {
      nombre: 'The Sniper',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-Y1ojR4fMz3Y/WwBnHZzULEI/AAAAAAABJFw/h6eayH4emzQnnCHwzxia-uErVL8iMxaOACLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'Cargo',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-QObahMRfKBk/Wv8FW9ZKRYI/AAAAAAABJFY/-nCrNtwtR7gJYOtfdOybNVfnayP8UEFEwCLcBGAs/s320/21.jpg'
    }

  ];
  arregloSeries1_1 = [
    {
      nombre: '13 Reasons Why',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/yeJPtZlChYGoCVmvYIrjAeQII7R.jpg'
    },
    {
      nombre: 'All Night',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/km0VVYYQLcPvCXPfMIvrPs6qn8z.jpg'},
    {
      nombre: 'The Rain',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/qGNfbDHjHN4zDZQlQiByPhU5oAr.jpg'
    },
    {
      nombre: 'Safe',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/hxONwCHsZdGcElLmZHSM5yA7tXH.jpg'
    }
  ];
  arregloSeries1_2=[
    {
      nombre: 'The Sinner',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/mzQyhOoKxWTFtIKjQfPx2ttYyQQ.jpg'

    },
    {
      nombre: 'American Gods',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/gevw5nZRYz2kWj1PqW9pz4sgeeZ.jpg',
    },
    {
      nombre: 'The Take',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/fEvJHR01YvaHoTHsbwMgmfvW9Ah.jpg'

    },
    {
      nombre: 'Cobra Kid',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/5qMupAz4A9EN5Rutrkmov45mNXZ.jpg'
    }
  ];
  arregloSeries2_1 = [
    {
      nombre: 'Into the Badlands',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://1.bp.blogspot.com/-5b3eD3-_ytU/Wt6-haiUv2I/AAAAAAABIkg/w5qsa0uG5e8iXPt0KHORzgcyS5mljmHBgCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'The Resident: ',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-aKbNjZjPM_k/Wsb2w8ssJcI/AAAAAAABIEY/SRlQn9n_7Z8B2r0-4vsBwkef9N0fnLGngCLcBGAs/s320/21.jpg'},
    {
      nombre: 'Humans',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-resgh5ojxRU/WwJIKDWgnSI/AAAAAAABJH0/7UKMjGaXcishruDCoJL9r2Ggb-LgTFaMgCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'Krypton',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-Z5dJ76PqWvI/WskStKBBGuI/AAAAAAABIIY/c2nP8iu0orofc2-bUMiGR0PjZVSWlbr-ACLcBGAs/s320/21.jpg'
    },
  ];
  arregloSeries2_2=[
    {
      nombre: 'Westworld',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-lKoTiF3RIVk/Wt1WV42Ix2I/AAAAAAABIig/9sgrKIkXwZwUOBi9kRQJmePWtX31-sSoACLcBGAs/s320/21.jpg'

    },
    {
      nombre: 'Blindspot',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-A_fR9X_ONe0/WfSODcAiQYI/AAAAAAABFIM/MSCXXjP0IKkdUmCR27QQvNzfjmnCI3ImQCLcBGAs/s320/21.jpg',
    },
    {
      nombre: 'Arrow',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://1.bp.blogspot.com/-xQrbJk1SSU4/WeG3MxqbEsI/AAAAAAABE4Y/CGVIsIAIqqoYe9eMtP9tl3hiKGOZTJm5ACLcBGAs/s320/21.jpg'

    },
    {
      nombre: 'Siren',
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://2.bp.blogspot.com/-hJlSiG_zOhA/WskDUxBI4eI/AAAAAAABIII/0emUf1sVxIksKvZ2_208BAoIHz20VPE_wCLcBGAs/s320/21.jpg'
    }
  ];

  nombre='';
  email='';
  password='';
  codigoDispositivo='';
  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }

  leerDatos(inputNombre: string) {
    this.nombre = inputNombre;
    console.log('Nombre', this.nombre);


  }


  // nombre = 'Adrian';
  // apellido = 'Eguez';
  // edad = 28;
  // sueldo = 3411234.13;
  // fechaNacimiento = new Date('1989-06-10');
  // nombreBoton = 'Cambiar color';
  // nombreClase = 'sa-titulo';
  // clase = 'papa';
  //
  // cambiarClaseDeTitulo() {
  //   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
  //   if (nombreClaseEsTitulo) {
  //     this.nombreClase = 'sa-subtitulo';
  //   } else {
  //     this.nombreClase = 'sa-titulo';
  //   }
  // }
  //
  // aplicarClase(valorInput: string) {
  //   this.nombreClase = valorInput;
  // }

}


