import { IconDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: IconDefaultProps,
  methods: {
    onTap(e) {
      if (this.props.onTap) {
        this.props.onTap(fmtEvent(this.props, e));
      }
    },
    catchTap(e) {
      if (this.props.catchTap) {
        this.props.catchTap(fmtEvent(this.props, e));
      }
    },
  },
});
