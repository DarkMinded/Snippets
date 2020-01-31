//for use bootstrap 4 Like a tag helper:
//sintax:
<button class="btn btn-success modalcall" data-id="@Model.RequestId.ToString()" data-parentpage="@Model.ParentPage" data-controler="Requests" data-action="CreateSpec"><i class="fas fa-file"></i></button>
//Html to achor the cshtml partial view to the current View
<div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" />

       <script type="text/javascript">
            $(function () {
                $(".modalcall").click(function () {
                    var url = "/" + $(this).attr("data-controler") + "/" + $(this).attr("data-action") + "/" + $(this).attr("data-id") + "?parent=" + $(this).attr("data-parentpage");
                    $("#modal").load(url, function () {
                        $("#modal").modal();
                    })
                });
            })
        </script>
