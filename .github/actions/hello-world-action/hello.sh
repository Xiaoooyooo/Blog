echo The message is:
echo ${{ inputs.message }}

time=`date`;
echo ::set-output name=time::$time