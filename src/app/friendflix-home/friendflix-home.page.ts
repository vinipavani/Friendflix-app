import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendflix-home',
  templateUrl: './friendflix-home.page.html',
  styleUrls: ['./friendflix-home.page.scss'],
})
export class FriendflixHomePage implements OnInit {

  constructor() { }

  post: object ={
      nome_do_usuario: 'Vinicius',
      foto_de_perfil: File,
      texto: 'aaaaa muito bom the witcher dublado pelo guilherme briggs',
      comentarios: 'papo reto guilherme briggs é brebo',
      anexo: File,
      likes_e_dislikes: {
          numeroDeLikes: 36,
          numeroDeDislikes: 7,
      },
      denuncias: {
        homofobia: 0,
        misogenia: 0,
        racismo: 0,
        fake_news: 2,
      },
      
  }
  likeColor(numeroDeLikes:number,numeroDeDislikes:number):string {
    if (numeroDeLikes>numeroDeDislikes) {
        return 'success';
    }
    else if (numeroDeLikes==numeroDeDislikes) {
        return 'medium';
    }
    else {
        return 'danger';
    }
  }
  ngOnInit() {
    this.likeColor(36, 7);
  }

}
