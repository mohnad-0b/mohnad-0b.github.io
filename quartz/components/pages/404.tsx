import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1 style="font-size: 4rem; margin-bottom: 0.5rem; text-align: center;">4 Oh! 4</h1>
      <p style="font-size: 1.2rem; margin-bottom: 1rem; font-weight: 700;">
        {i18n(cfg.locale).pages.error.notFound}
      </p>
      <img src="https://i.pinimg.com/736x/e6/17/78/e617787f593ac0e7ca11f553dd95d9b1.jpg" alt="404 Error" style="max-width: 100%; height: auto;" />
      <br />
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
