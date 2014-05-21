<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.util.*,tk.marklv.domain.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>show log</title>
</head>
<body>
	${param.useripaddress } - ${param.stage } - ${param.answer }
	<br>
	<%
		for (Marklv marklv : (List<Marklv>) request
				.getAttribute("marklvlist")) {
	%>
	<%=marklv.getId()%>
	.&nbsp;
	<%=marklv.getUseripaddress()%>
	&nbsp;&nbsp;
	<%=marklv.getTimestamp()%>
	-
	<%=marklv.getStage()%>
	:
	<%=marklv.getAnswer()%>
	<br>
	<%
		}
		;
	%>

</body>
</html>