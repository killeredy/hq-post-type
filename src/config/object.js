export class PagesOb {
  id = "";
  boxList = [];
  constructor(id) {
    this.id = id;
  }
}

export class boxOb {
  width = 6;
  height = 4;
  postId = "";
  id = "";
  constructor(id) {
    this.id = id;
  }
}

export class configDb {
  bg_color = "white";
  page_size = "1/1.414";
}
