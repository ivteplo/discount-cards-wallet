// Copyright (c) 2022 Ivan Teplov

import "./translations"

import App from "./App.svelte"
import "./index.css"

import { SheetElement } from "@ivteplo/html-sheet-element"

customElements.define("ui-sheet", SheetElement)

const app = new App({
  target: document.body,
  props: {},
})

export default app
