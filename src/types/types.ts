export interface Project {
  name : string, 
  image: string, 
  description : string,
  languages : any
  github : string | null, 
  url?: string | null 
  preview?: string | null 
}
export interface Page {
    object:           string;
    id:               string;
    created_time:     Date;
    last_edited_time: Date;
    created_by:       TedBy;
    last_edited_by:   TedBy;
    cover:            Cover;
    icon:             Cover;
    parent:           Parent;
    archived:         boolean;
    properties:       Properties;
    url:              string;
    public_url:       null;
}

export interface Cover {
    type: string;
    file: File;
}

export interface File {
    url:         string;
    expiry_time: Date;
}

export interface TedBy {
    object: string;
    id:     string;
}

export interface Parent {
    type:        string;
    database_id: string;
}

export interface Properties {
    Descripcion: Descripcion;
    Estado:      Estado;
    Fecha:       Fecha;
    Github:      URL;
    Preview:      URL;
    ID:          ID;
    Prioridad:   Prioridad;
    Lenguajes:   Estado2;
    Nombre:      Nombre;
}

export interface Descripcion {
    id:        string;
    type:      string;
    rich_text: RichText[];
}

export interface RichText {
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
    id:           string;
    type:         string;
    select: Select[];
}
export interface Estado2 {
    id:           string;
    type:         string;
    multi_select: Select[];
}

export interface Select {
    id:    string;
    name:  string;
    color: string;
}

export interface Fecha {
    id:   string;
    type: string;
    date: DateClass;
}

export interface DateClass {
    start:     Date;
    end:       null;
    time_zone: null;
}

export interface ID {
    id:        string;
    type:      string;
    unique_id: UniqueID;
}

export interface UniqueID {
    prefix: null;
    number: number;
}

export interface Nombre {
    id:    string;
    type:  string;
    title: RichText[];
}

export interface Prioridad {
    id:     string;
    type:   string;
    select: Select;
}

export interface URL {
    id:   string;
    type: string;
    url:  null;
}