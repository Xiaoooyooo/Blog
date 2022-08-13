echo The message is: ${{ inputs.message }}

time=`date`;
echo ::set-output name=time::$time