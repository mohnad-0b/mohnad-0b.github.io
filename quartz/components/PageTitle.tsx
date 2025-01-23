import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = fileData?.slug ? pathToRoot(fileData.slug) : "#"

  return (
    <div>
      <img
        src="https://yt3.googleusercontent.com/eS16DR9GFPaYPWV4bDleNEw1YxSw-uttCpsk-NJ5dlLd6gCj4t7lcYGF92MYNzFVvoJU5weWUg=s160-c-k-c0x00ffffff-no-rj"
        height="150"
        className="profile"
        width="150"
        alt="Profile"
      />
      <h2 className={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
.profile {
  border-radius: 50%;
  display: block;
  margin: 1rem auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
