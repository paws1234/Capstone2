@section('content')
    <div id="dashboard"></div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        // Pass props or data to React components if needed
        const userData = @json(auth()->user());
    </script>
@endsection
