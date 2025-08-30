import Link from 'next/link';
import css from './TagsMenu.module.css';  

interface TagsMenuProps {
  tags: string[]; 
}

export default function TagsMenu({ tags }: TagsMenuProps) {
  return (
    <div className={css.menuContainer}>
      
        <Link href="/notes/filter/All" className={`${css.buttonMenuLink}`}>Notes</Link>
      

      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}