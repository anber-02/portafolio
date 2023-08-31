export interface Project {
  id:          ID;
  descripcion: Descripcion[];
  estado:      Estado[];
  github:      null | string;
  lenguajes:   Estado[];
  nombre:      Descripcion[];
  image?:      string;
}

export interface Descripcion {
  type:        string;
  text:        Text;
  annotations: Annotations;
  plain_text:  string;
  href:        null;
}

export interface Annotations {
  bold:          boolean;
  italic:        boolean;
  strikethrough: boolean;
  underline:     boolean;
  code:          boolean;
  color:         string;
}

export interface Text {
  content: string;
  link:    null;
}

export interface Estado {
  id:    string;
  name:  string;
  color: string;
}

export interface ID {
  prefix: null;
  number: number;
}
