import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <img src="https://yt3.googleusercontent.com/eS16DR9GFPaYPWV4bDleNEw1YxSw-uttCpsk-NJ5dlLd6gCj4t7lcYGF92MYNzFVvoJU5weWUg=s160-c-k-c0x00ffffff-no-rj" height="150" class="profile" width="150">
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
