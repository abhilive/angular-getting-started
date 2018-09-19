import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "../products/product-list.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
