import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { clearEditorContent } from 'draftjs-utils'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.setDomEditorRef = ref => this.domEditor = ref;
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    }, () => {
      this.props.sendResult(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    });
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.reset) {
      this.reset();
    }
  }

  componentDidMount() {
    if(this.props.text) {
      const html = `${this.props.text}`;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState, });
      }
    }

    this.domEditor.focusEditor();
  }

  reset() {
      let {editorState} = this.state;
        editorState = clearEditorContent(editorState);
        this.setState({ editorState });
        this.props.completeClear();
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        ref={this.setDomEditorRef}
        editorState={editorState}
        wrapperClassName="rte-wrapper"
        editorClassName="rte-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbarCustomButtons={[this.props.UploadHandler]}
      />
    )
  }
}