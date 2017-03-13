import { Component, Input} from '@angular/core';
import { Post } from '../../post'

@Component({
  selector: 'app-blog-all-preview',
  templateUrl: './blog-all-preview.component.html',
  styleUrls: ['./blog-all-preview.component.scss']
})
export class BlogAllPreviewComponent {

	@Input() post: Post;

	ngOnInit(){

	}

}
