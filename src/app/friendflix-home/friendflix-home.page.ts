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
          numeroDeLikes: 0,
          numeroDeDislikes: 0,
      },
      denuncias: {
        homofobia: 0,
        misogenia: 0,
        racismo: 0,
        fake_news: 0,
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
  
  like():number{
    this.post.likes_e_dislikes.numeroDeLikes = this.post.likes_e_dislikes.numeroDeLikes + 1
    return this.post.likes_e_dislikes.numeroDeLikes
  }
  dislike():number{
    this.post.likes_e_dislikes.numeroDeDislikes = this.post.likes_e_dislikes.numeroDeDislikes + 1
    return this.post.likes_e_dislikes.numeroDeDislikes
  }
  
  ngOnInit() {
  }

}
