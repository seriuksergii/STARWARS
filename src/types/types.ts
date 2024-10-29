export interface Hero {
  name: string;
  url: string;
  homeworld: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  close: () => void;
}

export interface HeroItemProps {
  src: string;
  alt: string;
  className?: string;
  name: string;
  onClick: () => void;
}

export interface HeroModalProps {
  isOpen: boolean;
  selectedHero: Hero | null;
  filmTitles: string[];
  starshipNames: string[];
  close: () => void;
}

export interface PaginateProps {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}
