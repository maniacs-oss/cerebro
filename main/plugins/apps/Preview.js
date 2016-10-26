import React, { PropTypes, Component } from 'react';
import FileIcon from '../../components/FileIcon';
import FileDetails from '../../components/FileDetails';
import styles from './styles.css';

export default class Preview extends Component {
  static propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
  }
  render() {
    const { path } = this.props;
    return (
      <div>
        <div className={styles.previewIcon}>
          <FileIcon path={path} />
        </div>
        <div className={styles.previewName}>{name}</div>
        <FileDetails path={path} key={path} />
      </div>
    )
  }
}