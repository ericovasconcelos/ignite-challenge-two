
import { Button } from './Button';

export type Genre = {
  id: number,
  title: string,
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface SideBarProps {
  genres: Array<Genre>,
  onSelectGenre : (id:number)=> void,
  selectedGenreId: number,
}

interface SelectButton {
  iconName: string;
}

export function SideBar({genres, onSelectGenre, selectedGenreId}: SideBarProps) {



  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  );
}