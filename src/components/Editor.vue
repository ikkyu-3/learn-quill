<template>
  <div id="editor"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Quill, { defaultOptions } from "../modules/quill";

@Component
export default class Editor extends Vue {
  quill!: Quill;

  mounted() {
    this.initToolbars();

    this.quill = new Quill("#editor", defaultOptions);
  }

  private initToolbars() {
    const editor = document.getElementById("editor");
    if (!editor) return;

    const { parentElement } = editor;
    if (!parentElement) return;

    const toolbars = parentElement.querySelectorAll(".ql-toolbar");
    if (!toolbars) return;
    if (toolbars.length === 0) return;

    toolbars.forEach(t => t.remove());
  }
}
</script>
