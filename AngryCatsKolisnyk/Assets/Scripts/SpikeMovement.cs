using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpikeMovement : MonoBehaviour
{
    [SerializeField] Transform upPoint, downPoint;
    [SerializeField] float moveUpSpeed, moveDownSpeed;
    [SerializeField] bool isMoveUp;
    [SerializeField] bool isH = false;
    private void Update()
    {
        
        if(isH)
        {
            if (transform.position.x > upPoint.position.x)
            {
                isMoveUp = false;
            }
            else if (transform.position.x < downPoint.position.x)
            {
                isMoveUp = true;
            }
        }
        else
        {
            if (transform.position.y > upPoint.position.y)
            {
                isMoveUp = false;
            }
            else if (transform.position.y < downPoint.position.y)
            {
                isMoveUp = true;
            }
        }
    }

    private void FixedUpdate()
    {
        if (isH)
        {
            if (isMoveUp)
            {
                transform.Translate(Vector3.right * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.left * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
        else
        {

            if (isMoveUp)
            {
                transform.Translate(Vector3.up * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.down * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
    }
}
