function peakIndexInMountainArray(arr:number[]):number {
    let l = 0;
    let r = arr.length -1 ;
    let mid = 0;

    while ( l <= r) {
        mid = (l+r) >> 1;

        if (arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) return mid;
        else if (arr[mid] <= arr[mid-1]) r = mid - 1;
        else l = mid + 1;
    }

    return 0
}
