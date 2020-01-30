import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendflix-home',
  templateUrl: './friendflix-home.page.html',
  styleUrls: ['./friendflix-home.page.scss'],
})
export class FriendflixHomePage implements OnInit {

  constructor() { }

  post ={
      nome_do_usuario: 'Vinicius',
      foto_de_perfil: File,
      texto: 'aaaaa muito bom the witcher dublado pelo guilherme briggs',
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
  }
  
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

  valida_like():void{
      if(this.post.reactions.dislikeStatus == true){
        this.post.reactions.dislikeStatus = false;
        this.post.reactions.likeStatus = true;
        this.post.reactions.numeroDeDislikes -= 1;
        this.post.reactions.numeroDeLikes += 1;
      }
      else if(this.post.reactions.likeStatus == false){
          this.post.reactions.likeStatus = true;
          this.post.reactions.numeroDeLikes += 1;
      }    
      else if(this.post.reactions.likeStatus == true){
          this.post.reactions.likeStatus = false;
          this.post.reactions.numeroDeLikes -= 1;
      }
  }
  valida_dislike():void{
    if(this.post.reactions.likeStatus == true){
      this.post.reactions.likeStatus = false;
      this.post.reactions.dislikeStatus = true;
      this.post.reactions.numeroDeLikes -= 1;
      this.post.reactions.numeroDeDislikes += 1;
    }
    else if(this.post.reactions.dislikeStatus == false){
        this.post.reactions.dislikeStatus = true;
        this.post.reactions.numeroDeDislikes += 1;
    }    
    else if(this.post.reactions.dislikeStatus == true){
        this.post.reactions.dislikeStatus = false;
        this.post.reactions.numeroDeDislikes -= 1;
    }    
  }

      
  
  
  
  ngOnInit() {
  }

}
