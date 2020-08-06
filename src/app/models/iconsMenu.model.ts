export class IconsMenu {
  public id = '';
  public icon = '';
  public value = '';
  public active = false;
  public href = '';


  constructor(id: string, icon: string, value: string, active: boolean, href: string) {
    this.id = id;
    this.icon = icon;
    this.value = value;
    this.active = active;
    this.href = href;
  }
}
