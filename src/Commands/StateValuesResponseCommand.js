import { observer } from "mobx-react"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Command from "../Shared/Command"
import Content from "../Shared/Content"
import Colors from "../Theme/Colors"

const ROOT_TEXT = "(root)"
const COMMAND_TITLE = "STATE"
const PATH_LABEL = ""

const Styles = {
  path: {
    padding: "0 0 10px 0",
    color: Colors.bold,
  },
  pathLabel: {
    color: Colors.foregroundDark,
  },
  stringValue: {
    WebkitUserSelect: "all",
    wordBreak: "break-all",
  },
}

@observer
class StateValuesResponseCommand extends Component {
  static propTypes = {
    command: PropTypes.object.isRequired,
  }

  render() {
    const { command } = this.props
    const { payload } = command
    const { path, value } = payload
    const pathText = path || ROOT_TEXT

    return (
      <Command {...this.props} title={COMMAND_TITLE} startsOpen>
        <div style={Styles.container}>
          <div style={Styles.path}>
            <span style={Styles.pathLabel}>{PATH_LABEL}</span> {pathText}
          </div>
          <Content value={value} />
        </div>
      </Command>
    )
  }
}

export default StateValuesResponseCommand
