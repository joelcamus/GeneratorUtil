export class IconsMenu {
  public id = '';
  public icon = '';
  public value = '';
  public active = false;


  constructor(id: string, icon: string, value: string, active: boolean) {
    this.id = id;
    this.icon = icon;
    this.value = value;
    this.active = active;
  }
}
