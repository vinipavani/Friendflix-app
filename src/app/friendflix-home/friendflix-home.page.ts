import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendflix-home',
  templateUrl: './friendflix-home.page.html',
  styleUrls: ['./friendflix-home.page.scss'],
})
export class FriendflixHomePage implements OnInit {

  constructor() { }

  posts =[{
      nome_do_usuario: 'Vinicius',
      foto_de_perfil: File,
      texto: 'muito triste quando senhor white morre...',
      comentarios: 'papo reto guilherme briggs é brebo',
      anexo: File,
      spoiler: true,
      reactions: {
          numeroDeLikes: 21,
          numeroDeDislikes: 7,
          likeStatus: false,
          dislikeStatus: false,
      },
      denuncias: {
        homofobia: 0,
        misogenia: 0,
        racismo: 0,
        fake_news: 0,
      },    
  },
  { nome_do_usuario: 'Uriel',
    foto_de_perfil: File,
    texto: 'Elementar meu caro watson.',
    comentarios: 'papo reto atuação do doutor estranho muito boa.',
    anexo: File,
    spoiler: false,
    reactions: {
        numeroDeLikes: 7,
        numeroDeDislikes: 12,
        likeStatus: false,
        dislikeStatus: false,
    },
    denuncias: {
      homofobia: 0,
      misogenia: 0,
      racismo: 0,
      fake_news: 2,
    },    
},]

StarColor(numeroDeLikes:number,numeroDeDislikes:number):string {
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
/*valida_like e valida_dislike são as funções responsáveis pelo sistema de interação like/dislike
para garanti um bom funcionamento */
valida_like(post):void{
    if(post.reactions.dislikeStatus == true){
        post.reactions.dislikeStatus = false;
        post.reactions.likeStatus = true;
        post.reactions.numeroDeDislikes -= 1;
        post.reactions.numeroDeLikes += 1;
    }
    else if(post.reactions.likeStatus == false){
        post.reactions.likeStatus = true;
        post.reactions.numeroDeLikes += 1;
    }    
    else if(post.reactions.likeStatus == true){
        post.reactions.likeStatus = false;
        post.reactions.numeroDeLikes -= 1;
      }
}
valida_dislike(post):void{
    if(post.reactions.likeStatus == true){
        post.reactions.likeStatus = false;
        post.reactions.dislikeStatus = true;
        post.reactions.numeroDeLikes -= 1;
        post.reactions.numeroDeDislikes += 1;
    }
    else if(post.reactions.dislikeStatus == false){
        post.reactions.dislikeStatus = true;
        post.reactions.numeroDeDislikes += 1;
    }    
    else if(post.reactions.dislikeStatus == true){
        post.reactions.dislikeStatus = false;
        post.reactions.numeroDeDislikes -= 1;
    }    
}
/*função responsável pela remoção do alerta de spoiler*/
tiraAlerta(post){
    post.spoiler = false;
}

      
  
  
  
  ngOnInit() {
  }

}
