from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    CUSTOMER = 'customer'
    STAFF = 'staff'
    PENDING_ROLE = 'pending_role'

    ROLE_CHOICE = [
        (CUSTOMER,'Customer'),
        (STAFF,'Staff'),
        (PENDING_ROLE,'Pending_role'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE ,related_name='profile')
    phone_number = models.CharField(max_length=15)
    role = models.CharField(max_length=25, choices=ROLE_CHOICE, default=CUSTOMER)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args , **kwargs):
        if self.role == self.STAFF :
            self.user.is_staff = True
        else:
            self.user.is_staff = False

        self.user.save()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.username

class Address(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE , related_name='addresses')
    country = models.CharField(max_length=50)
    area= models.CharField(max_length=70)
    block_street = models.CharField(max_length=100)
    building_floor = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user_profile.user.username


