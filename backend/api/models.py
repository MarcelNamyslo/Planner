from django.db import models

class Todo(models.Model):
	completed=models.BooleanField(default=False)
	
	time=models.CharField(max_length=150)
	name=models.CharField(max_length=500)
	day= models.CharField(max_length=150, default='today')

	# string representation of the class
	def __str__(self):

		#it will return the title
		return self.name
