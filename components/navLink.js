export default function NavLink({ children }) {
  if (typeof children !== 'string') {
    console.warn('FXNavLink: children must be a string !')
    return null
  }

  return (
    <div className='FX_theme_nav_link'>
      {
        children.split('').map((w, i) => (
          <span key={i} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>{w}</span>
        ))
      }
    </div>
  )
}