import React from 'react';
import Notice from '@bufferapp/ui/Notice';
import Text from '@bufferapp/ui/Text';

/** Notice Dismissable */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line
    <Notice dismiss={() => console.log('dismissed!')} type="note">
      <Text>
        We&apos;re actively working on improving this feature and would love
        your feedback!
      </Text>
    </Notice>
  );
}
