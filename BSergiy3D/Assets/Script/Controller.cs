using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Controller : MonoBehaviour
{
    private float angleY, dirZ, jumpForce = 6f, turnSpeed = 80f;
    private bool isGrounded;
    private Rigidbody rb;
    private Animator animator;
    private Vector3 jumpDir;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        animator = GetComponent<Animator>();
    }

   
    void Update()
    {
        angleY = Input.GetAxis("Mouse X") * turnSpeed * Time.fixedDeltaTime;
        dirZ = Input.GetAxis("Vertical");
        transform.Rotate(new Vector3(0, angleY, 0f));

        Move(dirZ, "isWalkForward", "isWalkBack");
        Dodge();
        Sprint();
    }

    private void Move(float dir, string parametrName, string altParametrName)
    {
        if(dir > 0f)
        {
            animator.SetBool(parametrName, true);

        }else if (dir < 0f)
        {
            animator.SetBool(altParametrName, true);
        }
        else
        {
            animator.SetBool(parametrName, false);
            animator.SetBool(altParametrName, false);
        }
    }

    private void Dodge()
    {
        if(Input.GetKeyDown(KeyCode.D))
        {
            animator.Play("Sword_Dodge_Right");
        }
        else if (Input.GetKeyDown(KeyCode.A))
        {
            animator.Play("Sword_Dodgle_Left");
        }
    }

    private void Sprint()
    {

        animator.SetBool("isRun", Input.GetKey(KeyCode.LeftShift));
    }
}
